using DitherPunk
using DitherPunk: gradient_image
using ReferenceTests

using ImageCore
using ImageCore: GenericGrayImage
using ImageInTerminal
using UnicodePlots

w = 200
h = 4 * 4 # multiple of 4 for unicode braille print

"""
(Ab)use `spy` to interpret image as sparse array and print "sparsity pattern"
in braille through UnicodePlots.
"""
function print_braille(
    img::GenericGrayImage;
    invert=false,
    title="DitherPunk.jl",
    color=:white,
    labels=false,
    kwargs...,
)
    h, w = size(img)
    img = Bool.(img)

    println("")
    show(
        spy(
            img;
            # Braille character ↝ 4x2 grid
            maxheight=ceil(Int, h / 4),
            maxwidth=ceil(Int, w / 2),
            title=title,
            color=color,
            labels=labels,
            kwargs...,
        ),
    )
    return nothing
end

img, srgb = gradient_image(h, w)
println("Test image:")
imshow(srgb)

## Run reference tests for deterministic algorithms
# using Dict for Julia 1.0 compatibility
algs_deterministic = Dict(
    # threshold methods
    "ConstantThreshold" => ConstantThreshold(),
    # ordered dithering
    "Bayer" => Bayer(),
    "Bayer_l2" => Bayer(; level=2),
    "Bayer_l3" => Bayer(; level=3),
    "Bayer_l4" => Bayer(; level=4),
    "ClusteredDots" => ClusteredDots(),
    "CentralWhitePoint" => CentralWhitePoint(),
    "BalancedCenteredPoint" => BalancedCenteredPoint(),
    "Rhombus" => Rhombus(),
    # error error_diffusion
    "SimpleErrorDiffusion" => SimpleErrorDiffusion(),
    "FloydSteinberg" => FloydSteinberg(),
    "JarvisJudice" => JarvisJudice(),
    "Stucki" => Stucki(),
    "Burkes" => Burkes(),
    "Atkinson" => Atkinson(),
    "Sierra" => Sierra(),
    "TwoRowSierra" => TwoRowSierra(),
    "SierraLite" => SierraLite(),
    "Fan" => Fan(),
    "ShiauFan" => ShiauFan(),
    "ShiauFan2" => ShiauFan2(),
    "FalseFloydSteinberg" => DitherPunk.FalseFloydSteinberg(),
)

for (name, alg) in algs_deterministic
    img2 = copy(img)
    d = dither(img2, alg)
    @test_reference "references/grad_$(name).txt" Int.(d)
    @test eltype(d) == Gray{Bool}
    @test img2 == img # image not modified

    print_braille(d; title=name) # Visualize in terminal

    d = dither!(img2, alg; to_linear=true)
    @test_reference "references/grad_$(name)_linear.txt" Int.(d)
    @test eltype(d) == eltype(img)
    @test img2 == d # image updated in-place
end

## Algorithms with random output are currently only tested visually
algs_random = Dict(
    # threshold methods
    "white_noise_dithering" => WhiteNoiseThreshold(),
)

for (name, alg) in algs_random
    img2 = copy(img)
    d = dither(img2, alg)
    print_braille(d; title=name) # Visualize in terminal
    @test eltype(d) == Gray{Bool}
    @test img2 == img # image not modified

    d = dither!(img2, alg; to_linear=true)
    print_braille(d; title="$(name) linear") # Visualize in terminal
    @test eltype(d) == eltype(img)
    @test img2 == d # image updated in-place
end
