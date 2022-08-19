const BRAILLE_START = 10240
const BRAILLE_END = BRAILLE_START + 255
const BRAILLE_SYMBOLS = Char.(BRAILLE_START:BRAILLE_END)
const BRAILLE_CODE = [1, 2, 4, 64, 8, 16, 32, 128]
const H_BRAILLE = 4
const W_BRAILLE = 2

"""
    braille(img; kwargs...)
    braille(img, alg; kwargs...)

Binary dither with algorithm `alg`, then print image in braille.

## Keyword arguments
  - `invert`: invert Unicode output, defaults to `false`
  - `to_string`: return a string instead of printing to terminal. Defaults to `false`.

All keyword arguments for binary dithering methods can be used.
"""
function braille(
    img::GenericImage,
    alg::AbstractDither;
    invert::Bool=false,
    to_string::Bool=false,
    kwargs...,
)
    d = dither(Bool, Gray.(img), alg; kwargs...)
    return braille(d; invert=invert, to_string=to_string)
end

function braille(A::AbstractMatrix{Bool}; invert::Bool=false, to_string::Bool=false)
    invert && (A .= .!A)
    B = braille_matrix(A)
    str = join([join(r) for r in eachrow(B)], "\n")
    to_string && return str
    print(str)
    return nothing
end

braille_index(A) = sum(view(A, :) .* BRAILLE_CODE) + 1

function braille_matrix(A::AbstractMatrix)
    hi, wi = size(A)
    ho, wo = cld(hi, H_BRAILLE), cld(wi, W_BRAILLE)
    out = Matrix{Char}(undef, ho, wo)

    AP = PaddedView(0, A, (ho * H_BRAILLE, wo * W_BRAILLE))
    for (i, tileaxs) in enumerate(TileIterator(axes(AP), (H_BRAILLE, W_BRAILLE)))
        v = view(AP, tileaxs...)
        out[i] = BRAILLE_SYMBOLS[braille_index(v)]
    end
    return out
end
