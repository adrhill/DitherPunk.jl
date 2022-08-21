module DitherPunk

using ImageBase.ImageCore.ColorTypes
using ImageBase.ImageCore.Colors: DifferenceMetric, colordiff, DE_AB, invert_srgb_compand
using ImageBase.ImageCore: channelview, floattype, clamp01
using ImageBase: restrict
using Base: require_one_based_indexing
using PaddedViews: PaddedView
using TiledIteration: TileIterator
using Random
using IndirectArrays
using ColorSchemes
using LazyModules
#! format: off
@lazy import Clustering = "aaaa29a8-35af-508c-8bc3-b662a17a0fe5"
#! format: on

abstract type AbstractDither end

const BinaryGray = AbstractGray{Bool}
const NumberLike = Union{Number,AbstractGray}
const BinaryLike = Union{Bool,BinaryGray}
const Pixel = Union{Number,Colorant}

const GenericBinaryImage{T<:BinaryLike} = Union{BitMatrix,AbstractArray{T,2}}
const GenericGrayImage{T<:NumberLike} = AbstractArray{T,2}
const GenericImage{T<:Pixel,N} = AbstractArray{T,N}

include("colorschemes.jl")
include("utils.jl")
include("api/binary.jl")
include("api/color.jl")
include("threshold.jl")
include("ordered.jl")
include("ordered_imagemagick.jl")
include("error_diffusion.jl")
include("closest_color.jl")
include("api/default_method.jl")

# lazily loaded features
include("clustering.jl")
include("braille.jl")

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
# Other utilities
export upscale
export braille, brailleprint

end # module
