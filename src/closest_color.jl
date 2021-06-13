"""
Simplest form of image quantization by turning each pixel to the closest one
in the provided color palette `cs`.
Technically this not a dithering algorithm as the quatization error is not "randomized".
"""
struct ClosestColor <: AbstractColorDither end

function (alg::ClosestColor)(
    out::GenericImage,
    img::GenericImage,
    cs::AbstractVector{<:Colorant};
    metric::DifferenceMetric=DE_2000(),
)
    return out .= eltype(out).(map((px) -> closest_color(px, cs; metric=metric), img))
end
