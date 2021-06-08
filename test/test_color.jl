using DitherPunk
using DitherPunk: closest_color
using ImageCore
using TestImages

## Define color scheme
white = RGB{Float32}(1, 1, 1)
yellow = RGB{Float32}(1, 1, 0)
green = RGB{Float32}(0, 0.5, 0)
orange = RGB{Float32}(1, 0.5, 0)
red = RGB{Float32}(1, 0, 0)
blue = RGB{Float32}(0, 0, 1)

cs = [white, yellow, green, orange, red, blue]

# Test helper function
@test closest_color(RGB{Float32}(1, 0.1, 0.1), cs) == red

# Load test image
img = testimage("fabio_color_256")
imshow(img)

# Run & test dither
algs = Dict(
    "FloydSteinberg" => FloydSteinberg(),
    "ClosestColor" => ClosestColor(),
)

for (name, alg) in algs
    d = dither(img, alg, cs)
    @test_reference "references/color_$(name).txt" d
    @test eltype(d) == eltype(cs)
    imshow(d)
end
