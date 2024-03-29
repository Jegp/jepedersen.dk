---
title: The unreasonable effectiveness of deep learning
pubdate: 2021/11/20
image: deep_net.png
bibliography: bib.bib
---


The search for building and understanding *intelligent machines* has
been under way for thousands of years and appear fundamental to the
human condition [@Russel_Norvig_2010]. Deep learning models have
recently been heavily dominating this search for artificial intelligence
(AI), as demonstrated by the go-playing Alpha Go [@Silver2017], the
narrating GPT-3 [@Brown2020], and many more. This is an odd development
for many since computational graphs are old news, and because no
ground-breaking heureka moment has guided the development. Rather, deep
learning is guided by a primitive brute-force optimization mechanism.

Why is it that deep learning and deep neural networks have become so
popular despite their simplicity? If there is no theoretical foundation
to build on, why are they so *unreasonably* efficient?

In this essay, I will argue the answer is: part coincidence, part skill.
Motivating the skillfulness, I will first define deep learning (DL) and
attempt to explain the phenomenon from a first-principle's approach. In
this light, I will describe the "coincidental" part by revisiting sets
of problems DL is particularly good at, so we can finally arrive at an
answer to our question: why are deep networks so useful?

# Deep Learning

Even though many DL proponents promote its similarities to the human
brain, the building block of deep networks have little to do with
nervous systems. Deep networks can be roughly defined as large
computational graphs with weighted nonlinearities.

This [@Carson_1925] is [@Shannon1942] not [@Rosenblatt_1958] new
[@Rumelhart_Hinton_Williams_1986].

In fact, eerily similar approaches was attempted throughout 1960-1990,
with little success. What makes deep networks interesting, though, is
that they can approximate *any function* to *any desired degree of
approximation* [@Hornik_Stinchcombe_White_1989]. This striking fact was
discovered in 1986 and tells us that deep networks can solve *any*
problem, *if* they are big enough. Granted, that is a big *if*, and this
has largely been driving the explosive growth of the graphics processing
units (GPUs) market: the bigger network, the better approximations.

It still took several decades before the idea of a universal function
approximator could be used to solve problems with any form of practical
relevance. Theoretically, this was already solved in 1986,
where @Rumelhart_Hinton_Williams_1986
showed that large nets could be "trained" by *searching* for optimal
configurations in a sea of possibilities. However, it was not until the
early 2000's that sufficiently powerful hardware came along to build and
search through massive deep networks now up to *hundreds of trillions*
of parameters [@Brown2020].

<figure>
<img src="cat.png"/>
<p class="caption">
Figure 1. Two possible classification task based on the same cat picture: 
object identification (top) and masking out pixels belonging to the cat (bottom).
</p>
</figure>

# Deep Learning first principles

It may come as a surprise how this type of searching yields meaningful
networks. Fortunately, physicists and mathematicians helped resolve
parts of the conundrum with two ancient ideas: symmetry
[@Gens_Domingos_2014] and equivariance [@Cohen_Welling_2016].

It turns out that symmetry is a useful property during learning. If you
are to, say, identify a cat in an image, it should not matter how big
the cat is. Or where in the picture the cat is. In other words, we
want to find a way to learn a way to look at cats that are *symmetric*
under scale (size) or translation (location in picture). This symmetry
is normally called *invariance*, because the idea that a cat is in the
picture *does not vary* if the cat is very large and dead-center, or 
really small in the lower left corner. We identify cats independently
from those *distortions*, $\xi$.

We can write this down more precisely by looking at some images
$x \in \mathbb{I}$
that we are looking to classify into a binary decision
$y \in \mathbb{C}: \\{\text{CAT}, \neg\text{CAT}\\}$ using
a network $f: \mathbb{I} \mapsto \mathbb{C}$, we can therefore say that
the guess *without* a distortion $\xi: \mathbb{I} \mapsto \mathbb{I}$,
should be the same *with* the distortion: $$f(x) = f(\xi (x))$$

We can take this one step further by generalizing the invariance, so
that the networks can operate on distorted images, *while retaining the
distortion* [@Cohen_Welling_2016]. Imagine for a while, that we are no
longer identifying cats, but colouring them, as shown in Figure 1. In
that case, invariance will not do because we need to *include the
distortion in the output*. Relating this to the example of the cat, we
cannot always think that the cat is in the center of the image and
colour its outline there. Rather, we need to correctly scale and
translate the outline in the output image, that is, we need to *preserve
the structure* of the distortion. 
When we want to mask our cat (as in Figure 1), our *structure preserving*
network should be written as $f: \mathbb{I} \mapsto \mathbb{I}$ and 
fulfill<a href="#footnote-1" class="footnote-a">1</a>: $$\xi(f(x)) = f(\xi(x))$$

Our network is now a *structure preserving map*, also known as <i><a href="https://en.wikipedia.org/wiki/Equivariant_map">equivariant maps</a></i>.
They are fundamental to, for instance, topology and graph theory.

# Suitable problems for Deep Learning

It has been shown that deep networks are particularly good at preserving
symmetry and structures [@Cohen_Welling_2016; @Gens_Domingos_2014]. This
kind of preservation allows for the detection of symmetries and
structures, but also the *mapping* of symmetries and structures between
domains such as image, 3d-space, language, audio and many others
[@Bronstein_Bruna_Cohen_Velickovic_2021].

This is obviously relevant for classifying and masking cats, but what about
everything else "AI"? What about other types of
intelligence like bodily intelligences, causal reasoning (what is the
*source* of the structure), abstract thinking, and so on? Is that all a
matter of preserving mapping? 
Maybe. We do not know [@Saxe_Nelli_Summerfield_2021]. Please find out.

<figure>
<img src="ai_pop.png" style="width: 80%;"/>
<p class="caption">
Popularity of the search terms "deep learning" and "artificial
intelligence" on Google Trends [@Google2021]. The Y-axis expresses
relative popularity where 100 indicates the peak number of
searchers.
</p>
</figure>

# Why did Deep Learning become so popular?

Returning to the idea of a universal function approximator, these
networks are precisely exercising the approximation of domain mappings.
They find appropriate responses such as "CAT", a colouring mask, or even
a synthesized voice command. Pause here for a second and imagine how
many problems can be solved this way. Is language a mapping of concepts
to voice or text [@Brown2020]? Is programming a mapping of concepts to
code [@Tiwang_Oladunni_Xu_2019]?

By now, the reader is hopefully convinced of the usefulness of the
approach. And plenty of evidence exists in applications for speech
synthesis, self-driving cars, facial recognition, object detection, 
[fake blob opera](https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw), etc.
This is the coincidence: pioneers of the abovementioned principles could
not possibly have known the extend to which their findings would
generalize.

Figure 2 plots the relative popularity of two search terms: "artificial
intelligence" and "deep learning" [@Google2021]. It appears the general
public lost interest in "classical" AI in the beginning of the 00's only
to slowly move towards deep learning-driven AI in the mid 10's.
Interestingly enough, this coincides with the first papers on
invariances and structure preservations in 2014/15.

It would be presumptuous to exclude other factors, and the advent of
commercialized hardware that unlocks the training of large deep nets, is
certainly one such influence. But the fundamental properties we have
discussed here, are not only interesting because they explain what is
feasible, they also hint at what is *not*. Perhaps that is why deep
learning is losing popularity towards the end of 2020?

<div class="footnotes">
[ <b id="footnote-1">1</b> ]: This is also known as *equivariance* and the formula is slightly
    more involved, since the distortion in the input domain may be
    different from the distortion in the codomain. See
    [@Bronstein_Bruna_Cohen_Velickovic_2021] for a more detailed
    treatment.

</div>
