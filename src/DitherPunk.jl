module DitherPunk

using Base: require_one_based_indexing
using Random: rand
using ImageCore.ColorTypes
using ImageCore.FixedPointNumbers: N0f8
using ImageCore.Colors: DifferenceMetric, EuclideanDifferenceMetric
using ImageCore.Colors: DE_2000, DE_94, DE_JPC79, DE_CMC, DE_BFD
using ImageCore.Colors: colordiff, invert_srgb_compand
import ImageCore.Colors: _colordiff # extended in colordiff.jl
using ImageCore: channelview, floattype, clamp01
using IndirectArrays: IndirectArray

using ColorSchemes: ColorScheme
using ColorQuantization: quantize, AbstractColorQuantizer, KMeansQuantization
using UnicodeGraphics: uprint, ustring

abstract type AbstractDither end

const BinaryGray = AbstractGray{Bool}
const NumberLike = Union{Number,AbstractGray}
const BinaryLike = Union{Bool,BinaryGray}
const Pixel = Union{Number,Colorant}

const GenericBinaryImage{T<:BinaryLike} = Union{BitMatrix,AbstractArray{T,2}}
const GenericGrayImage{T<:NumberLike} = AbstractArray{T,2}
const GenericImage{T<:Pixel} = AbstractArray{T,2}
const ColorArray{T<:Pixel,N} = AbstractArray{T,N}
const ColorVector{T<:Pixel} = AbstractVector{T}

include("colorschemes.jl")
include("utils.jl")
include("colordiff.jl")
include("color_picker.jl")
include("api/binary.jl")
include("api/color.jl")
include("threshold.jl")
include("ordered.jl")
include("ordered_imagemagick.jl")
include("error_diffusion.jl")
include("closest_color.jl")
include("api/default_method.jl")
include("braille.jl")
include("clustering.jl")

export dither, dither!
# Threshold dithering
export ConstantThreshold, WhiteNoiseThreshold
# Ordered dithering
export OrderedDither
export Bayer, ClusteredDots, CentralWhitePoint, BalancedCenteredPoint, Rhombus
export IM_checks, IM_h4x4a, IM_h6x6a, IM_h8x8a, IM_h4x4o, IM_h6x6o, IM_h8x8o
export IM_c5x5, IM_c6x6, IM_c7x7
# Error diffusion
export ErrorDiffusion
export SimpleErrorDiffusion, FloydSteinberg, JarvisJudice, Stucki, Burkes
export Sierra, TwoRowSierra, SierraLite, Atkinson, Fan93, ShiauFan, ShiauFan2
# Closest color
export ClosestColor
# Closest color lookup
export AbstractColorPicker
export RuntimeColorPicker
export LookupColorPicker
export FastEuclideanMetric
# Other utilities
export upscale
export braille

end # module
