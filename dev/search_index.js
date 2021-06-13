var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/#Functions","page":"API Reference","title":"Functions","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [DitherPunk]","category":"page"},{"location":"api/#DitherPunk.AbstractOrderedDither-Tuple{AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}, AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}}","page":"API Reference","title":"DitherPunk.AbstractOrderedDither","text":"dither(img::AbstractMatrix, alg::AbstractOrderedDither; to_linear=false, invert_map=false)\n\nOrdered dithering using threshold maps. Takes a grayscale image img and a normalized threshold matrix mat. The threshold matrix is repeatedly tiled to match the size of img and is then applied as a per-pixel threshold map. Optionally, this final threshold map can be inverted by selecting invert_map=true.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.BalancedCenteredPoint","page":"API Reference","title":"DitherPunk.BalancedCenteredPoint","text":"BalancedCenteredPoint()\n\nBalanced centered point ordered dithering. Uses 6 times 6 threshold matrix BALANCED_CENTERED_POINT_MAT.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.Bayer","page":"API Reference","title":"DitherPunk.Bayer","text":"Bayer(level)\n\nOrdered dithering using the Bayer matrix as a threshold matrix. The Bayer matrix is of dimension 2^n+1 times 2^n+1, where n is the level, which defaults to 1.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.BinaryDitherMetric","page":"API Reference","title":"DitherPunk.BinaryDitherMetric","text":"Define custom color difference metric with linear distances between grayscale values.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.CentralWhitePoint","page":"API Reference","title":"DitherPunk.CentralWhitePoint","text":"CentralWhitePoint()\n\nCentral white point ordered dithering. Uses 6 times 6 threshold matrix CENTRAL_WHITE_POINT_MAT.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.ClosestColor","page":"API Reference","title":"DitherPunk.ClosestColor","text":"Simplest form of image quantization by turning each pixel to the closest one in the provided color palette cs. Technically this not a dithering algorithm as the quatization error is not \"randomized\".\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.ClusteredDots","page":"API Reference","title":"DitherPunk.ClusteredDots","text":"ClusteredDots()\n\nClustered dots ordered dithering. Uses 6 times 6 threshold matrix CLUSTERED_DOTS_MAT.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.ConstantThreshold","page":"API Reference","title":"DitherPunk.ConstantThreshold","text":"ConstantThreshold(threshold)\n\nUse a constant threshold map. Defaults to 0.5 if threshold isn't specified.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.ErrorDiffusion-Tuple{AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}, AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}}","page":"API Reference","title":"DitherPunk.ErrorDiffusion","text":"Binary error diffusion.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.ErrorDiffusion-Tuple{Union{AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}, AbstractArray{var\"#s4\", N} where {var\"#s4\"<:ColorTypes.Colorant, N}}, Union{AbstractArray{T, N} where {T<:Union{Number, ColorTypes.AbstractGray{T} where T}, N}, AbstractArray{var\"#s4\", N} where {var\"#s4\"<:ColorTypes.Colorant, N}}, AbstractVector{var\"#s47\"} where var\"#s47\"<:ColorTypes.Colorant}","page":"API Reference","title":"DitherPunk.ErrorDiffusion","text":"Error diffusion for general color schemes cs.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.Rhombus","page":"API Reference","title":"DitherPunk.Rhombus","text":"Rhombus()\n\nDiagonal ordered matrix with balanced centered points. Uses 8 times 8 threshold matrix RHOMBUS_MAT.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.WhiteNoiseThreshold","page":"API Reference","title":"DitherPunk.WhiteNoiseThreshold","text":"WhiteNoiseThreshold()\n\nUse white noise as a threshold map.\n\n\n\n\n\n","category":"type"},{"location":"api/#DitherPunk.bayer_matrix-Tuple{Int64}","page":"API Reference","title":"DitherPunk.bayer_matrix","text":"bayer_matrix(n::Int)::AbstractMatrix{Int}\n\nContruct (un-normalized) Bayer matrices of level n through recursive definition.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.closest_color-Tuple{ColorTypes.Colorant, AbstractVector{var\"#s29\"} where var\"#s29\"<:ColorTypes.Colorant}","page":"API Reference","title":"DitherPunk.closest_color","text":"Return color in ColorScheme cs that is closest to color according to colordiff\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.dither","page":"API Reference","title":"DitherPunk.dither","text":"binarize([T::Type,] img, alg::AbstractDither, args...; kwargs...)\n\nDither img using algorithm alg.\n\nOutput\n\nIf no return type is specified, the default return type for binary dithering algorithms is Gray{Bool}. For color algorithms, the type of the colorscheme is used.\n\n\n\n\n\n","category":"function"},{"location":"api/#DitherPunk.dither!","page":"API Reference","title":"DitherPunk.dither!","text":"dither!([out,] img, alg::AbstractDither, args...; kwargs...)\n\nDither img using algorithm alg.\n\nOutput\n\nIf out is specified, it will be changed in place. Otherwise img will be changed in place.\n\n\n\n\n\n","category":"function"},{"location":"api/#DitherPunk.gradient_image-Tuple{Any, Any}","page":"API Reference","title":"DitherPunk.gradient_image","text":"Create linear grayscale gradient image of type Gray.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.linear2srgb-Tuple{Number}","page":"API Reference","title":"DitherPunk.linear2srgb","text":"Convert from linear to sRGB color space.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.srgb2linear-Tuple{Number}","page":"API Reference","title":"DitherPunk.srgb2linear","text":"Convert from sRGB to linear color space.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.test_on_gradient-Tuple{DitherPunk.AbstractDither}","page":"API Reference","title":"DitherPunk.test_on_gradient","text":"Test dithering algorithm alg on linear grayscale gradient from gradient_image and show stacked plot.\n\n\n\n\n\n","category":"method"},{"location":"api/#DitherPunk.upscale-Tuple{Any, Any}","page":"API Reference","title":"DitherPunk.upscale","text":"Upscale image by repeating individual pixels.\n\n\n\n\n\n","category":"method"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"EditURL = \"https://github.com/JuliaImages/DitherPunk.jl/blob/master/docs/literate/simple_example.jl\"","category":"page"},{"location":"generated/simple_example/#Example","page":"Get started","title":"Example","text":"","category":"section"},{"location":"generated/simple_example/#Preprocessing","page":"Get started","title":"Preprocessing","text":"","category":"section"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"We start out by loading an image, in this case the lighthouse from TestImages.jl.","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"using DitherPunk\nusing Images\nusing Images: ImageContrastAdjustment\nusing TestImages\n\nimg = testimage(\"lighthouse\")","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"Normalizing the image can emphasize the effect of the algorithms. It is highly recommended to play around with algorithms such as those provided by ImageContrastAdjustment.jl","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"img = Gray.(img) # covert to grayscale\nimg = adjust_histogram(img, LinearStretching()) # normalize","category":"page"},{"location":"generated/simple_example/#Dithering","page":"Get started","title":"Dithering","text":"","category":"section"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"We can now apply dithering algorithms of our choice, for example BalancedCenteredPoint. The dithering algorithms return binary matrices of type Matrix{Gray{Bool}}.","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"d = dither(img, BalancedCenteredPoint())","category":"page"},{"location":"generated/simple_example/#Color-spaces","page":"Get started","title":"Color spaces","text":"","category":"section"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"Dithering in sRGB color space can lead to results that are too bright. To obtain a dithered image that more closely matches the human perception of brightness, grayscale images can be converted to a linear color space using srgb2linear. Alternatively, dither accepts the boolean keyword argument to_linear.","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"d = dither(img, BalancedCenteredPoint(); to_linear=true)","category":"page"},{"location":"generated/simple_example/#Working-with-small-images","page":"Get started","title":"Working with small images","text":"","category":"section"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"The previous BalancedCenteredPoint algorithm has a large characteristic pattern. Some algorithms work better on smaller images, for example Bayer, another ordered dithering algorithm that leads to characteristic cross-hatch patterns.","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"img = imresize(img; ratio=1 / 5) # downscale\nd = dither(img, Bayer(); to_linear=true)","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"The function upscale provides integer scaling to print \"chunkier\" pixels.","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"upscale(d, 3)","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"","category":"page"},{"location":"generated/simple_example/","page":"Get started","title":"Get started","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"EditURL = \"https://github.com/JuliaImages/DitherPunk.jl/blob/master/docs/literate/gallery_images.jl\"","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"using DitherPunk\nusing Images\nusing TestImages","category":"page"},{"location":"generated/gallery_images/#Test-image-gallery","page":"Images","title":"Test image gallery","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"This gallery uses images from TestImages.jl.","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"function preprocess(img)\n    img = Gray.(img)\n    return imresize(img; ratio=1 / 2)\nend\n\nfile_names = [\n    \"cameraman\", \"lake_gray\", \"house\", \"fabio_gray_512\", \"mandril_gray\", \"peppers_gray\"\n]\nimgs = [preprocess(testimage(file)) for file in file_names]\nmosaic(imgs; ncol=3)","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"Our test function test_on_images just runs a dithering algorithm on all six images in linear color space (to_liner=true).","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"function test_on_images(alg; to_linear=false)\n    dithers = [dither(img, alg; to_linear) for img in imgs]\n    return mosaic(dithers; ncol=3)\nend","category":"page"},{"location":"generated/gallery_images/#Threshold-dithering","page":"Images","title":"Threshold dithering","text":"","category":"section"},{"location":"generated/gallery_images/#ConstantThreshold","page":"Images","title":"ConstantThreshold","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(ConstantThreshold())","category":"page"},{"location":"generated/gallery_images/#WhiteNoiseThreshold","page":"Images","title":"WhiteNoiseThreshold","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(WhiteNoiseThreshold())","category":"page"},{"location":"generated/gallery_images/#Ordered-dithering","page":"Images","title":"Ordered dithering","text":"","category":"section"},{"location":"generated/gallery_images/#Bayer-matrices","page":"Images","title":"Bayer matrices","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"Level 1","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Bayer())","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"Level 2","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Bayer(; level=2))","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"Level 3","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Bayer(; level=3))","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"Level 4","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Bayer(; level=4))","category":"page"},{"location":"generated/gallery_images/#ClusteredDots","page":"Images","title":"ClusteredDots","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(ClusteredDots())","category":"page"},{"location":"generated/gallery_images/#CentralWhitePoint","page":"Images","title":"CentralWhitePoint","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(CentralWhitePoint())","category":"page"},{"location":"generated/gallery_images/#BalancedCenteredPoint","page":"Images","title":"BalancedCenteredPoint","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(BalancedCenteredPoint())","category":"page"},{"location":"generated/gallery_images/#Rhombus","page":"Images","title":"Rhombus","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Rhombus())","category":"page"},{"location":"generated/gallery_images/#Error-diffusion","page":"Images","title":"Error diffusion","text":"","category":"section"},{"location":"generated/gallery_images/#SimpleErrorDiffusion","page":"Images","title":"SimpleErrorDiffusion","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(SimpleErrorDiffusion())","category":"page"},{"location":"generated/gallery_images/#FloydSteinberg","page":"Images","title":"FloydSteinberg","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(FloydSteinberg())","category":"page"},{"location":"generated/gallery_images/#JarvisJudice","page":"Images","title":"JarvisJudice","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(JarvisJudice())","category":"page"},{"location":"generated/gallery_images/#Stucki","page":"Images","title":"Stucki","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Stucki())","category":"page"},{"location":"generated/gallery_images/#Burkes","page":"Images","title":"Burkes","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Burkes())","category":"page"},{"location":"generated/gallery_images/#Sierra","page":"Images","title":"Sierra","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Sierra())","category":"page"},{"location":"generated/gallery_images/#TwoRowSierra","page":"Images","title":"TwoRowSierra","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(TwoRowSierra())","category":"page"},{"location":"generated/gallery_images/#SierraLite","page":"Images","title":"SierraLite","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(SierraLite())","category":"page"},{"location":"generated/gallery_images/#Atkinson()","page":"Images","title":"Atkinson()","text":"","category":"section"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"test_on_images(Atkinson())","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"","category":"page"},{"location":"generated/gallery_images/","page":"Images","title":"Images","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"EditURL = \"https://github.com/JuliaImages/DitherPunk.jl/blob/master/docs/literate/gallery_gradient.jl\"","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"using DitherPunk\nusing DitherPunk: gradient_image, test_on_gradient\nusing Images","category":"page"},{"location":"generated/gallery_gradient/#Gallery","page":"Gradient","title":"Gallery","text":"","category":"section"},{"location":"generated/gallery_gradient/#On-color-spaces","page":"Gradient","title":"On color spaces","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"A simple linear gradient works well to reveal the characteristic patterns of different dithering algorithms.","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"srbg, linear = gradient_image(100, 800);\nmosaicview(srbg, linear)","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"The pixel intensities in the image srgb increase linearly from 0 to 1. The second image linear has been converted from sRGB to a linear representation, which more closely matches our human perception of brightness.","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"The helper function test_on_gradient takes a dithering algorithm and runs it on both the srgb and the linear image. It then shows a comparison of both inputs and outputs.","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"Most dithering algorithms in DitherPunk.jl provide an optional parameter to_linear, which converts the input image to a linear color space before applying the dithering. Select what looks best!","category":"page"},{"location":"generated/gallery_gradient/#Threshold-dithering","page":"Gradient","title":"Threshold dithering","text":"","category":"section"},{"location":"generated/gallery_gradient/#ConstantThreshold","page":"Gradient","title":"ConstantThreshold","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(ConstantThreshold())","category":"page"},{"location":"generated/gallery_gradient/#WhiteNoiseThreshold","page":"Gradient","title":"WhiteNoiseThreshold","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(WhiteNoiseThreshold())","category":"page"},{"location":"generated/gallery_gradient/#Ordered-dithering","page":"Gradient","title":"Ordered dithering","text":"","category":"section"},{"location":"generated/gallery_gradient/#Bayer-matrices","page":"Gradient","title":"Bayer matrices","text":"","category":"section"},{"location":"generated/gallery_gradient/#bayer_dithering","page":"Gradient","title":"bayer_dithering","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Bayer())","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"The order of the Bayer-matrix can be specified through the parameter level, which defaults to 1. Level 2","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Bayer(; level=2))","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"Level 3","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Bayer(; level=3))","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"Level 4","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Bayer(; level=4))","category":"page"},{"location":"generated/gallery_gradient/#Clustered-/-halftone-dithering","page":"Gradient","title":"Clustered / halftone dithering","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"The following methods have large characteristic patterns and are therefore better suited for large images.","category":"page"},{"location":"generated/gallery_gradient/#ClusteredDots","page":"Gradient","title":"ClusteredDots","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(ClusteredDots())","category":"page"},{"location":"generated/gallery_gradient/#CentralWhitePoint","page":"Gradient","title":"CentralWhitePoint","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(CentralWhitePoint())","category":"page"},{"location":"generated/gallery_gradient/#BalancedCenteredPoint","page":"Gradient","title":"BalancedCenteredPoint","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(BalancedCenteredPoint())","category":"page"},{"location":"generated/gallery_gradient/#Rhombus","page":"Gradient","title":"Rhombus","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Rhombus())","category":"page"},{"location":"generated/gallery_gradient/#Error-diffusion","page":"Gradient","title":"Error diffusion","text":"","category":"section"},{"location":"generated/gallery_gradient/#SimpleErrorDiffusion","page":"Gradient","title":"SimpleErrorDiffusion","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(SimpleErrorDiffusion())","category":"page"},{"location":"generated/gallery_gradient/#FloydSteinberg","page":"Gradient","title":"FloydSteinberg","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(FloydSteinberg())","category":"page"},{"location":"generated/gallery_gradient/#JarvisJudice","page":"Gradient","title":"JarvisJudice","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(JarvisJudice())","category":"page"},{"location":"generated/gallery_gradient/#Stucki","page":"Gradient","title":"Stucki","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Stucki())","category":"page"},{"location":"generated/gallery_gradient/#Burkes","page":"Gradient","title":"Burkes","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Burkes())","category":"page"},{"location":"generated/gallery_gradient/#Sierra","page":"Gradient","title":"Sierra","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Sierra())","category":"page"},{"location":"generated/gallery_gradient/#TwoRowSierra","page":"Gradient","title":"TwoRowSierra","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(TwoRowSierra())","category":"page"},{"location":"generated/gallery_gradient/#SierraLite","page":"Gradient","title":"SierraLite","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(SierraLite())","category":"page"},{"location":"generated/gallery_gradient/#Atkinson()","page":"Gradient","title":"Atkinson()","text":"","category":"section"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"test_on_gradient(Atkinson())","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"","category":"page"},{"location":"generated/gallery_gradient/","page":"Gradient","title":"Gradient","text":"This page was generated using Literate.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DitherPunk","category":"page"},{"location":"#DitherPunk.jl","page":"Home","title":"DitherPunk.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DitherPunk.jl. A dithering / digital halftoning package inspired by Lucas Pope's Obra Dinn and this blogpost by Surma.","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"EditURL = \"https://github.com/JuliaImages/DitherPunk.jl/blob/master/docs/literate/color.jl\"","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"using DitherPunk\nusing Images\nusing TestImages","category":"page"},{"location":"generated/color/#Color-dithering","page":"Color algorithms","title":"Color dithering","text":"","category":"section"},{"location":"generated/color/#Defining-a-color-scheme","page":"Color algorithms","title":"Defining a color scheme","text":"","category":"section"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"Let's assume we want to recreate an image by stacking 20 times 20 Rubik's cubes. Dithering algorithms are perfect for this task! We start out by defining a custom color scheme:","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"white = RGB{Float32}(1, 1, 1)\nyellow = RGB{Float32}(1, 1, 0)\ngreen = RGB{Float32}(0, 0.5, 0)\norange = RGB{Float32}(1, 0.5, 0)\nred = RGB{Float32}(1, 0, 0)\nblue = RGB{Float32}(0, 0, 1)\n\nrubiks_colors = [white, yellow, green, orange, red, blue]","category":"page"},{"location":"generated/color/#Dithering-the-image","page":"Color algorithms","title":"Dithering the image","text":"","category":"section"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"Now we only have to pick an image","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"img = testimage(\"fabio_color_256\")\nimg = imresize(img, 60, 60)","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"and run an ErrorDiffusion algorithm of our choice, e.g. FloydSteinberg","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"d = dither(img, FloydSteinberg(), rubiks_colors)","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"or simply quantize to the closest color:","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"d = dither(img, ClosestColor(), rubiks_colors)","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"For an overview of all error diffusion algorithms, check out the gallery.","category":"page"},{"location":"generated/color/#Using-ColorSchemes.jl","page":"Color algorithms","title":"Using ColorSchemes.jl","text":"","category":"section"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"Predefined color schemes from ColorSchemes.jl can also be used by accessing the color scheme's colors. Let's use the colors of the Brazilian flag 🇧🇷:","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"using ColorSchemes\ncs = ColorSchemes.flag_br\ncolors = cs.colors\n\nimg = testimage(\"fabio_color_256\")\nd = dither(img, Atkinson(), colors)","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"","category":"page"},{"location":"generated/color/","page":"Color algorithms","title":"Color algorithms","text":"This page was generated using Literate.jl.","category":"page"}]
}
