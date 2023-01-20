import React from "react";
import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";


const About = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <PersonalInfo />
            </div>
            <div className="Blog">
                <header>SonnetCompleter</header>
                <p>
                    SonnetCompleter is as it's called, it completes a sonnet.
                </p>
                <p>
                    To use it simply, navigate to the SonnetCompleter page and type in the text you would
                    like your sonnet to start with. Then hit enter.
                </p>
                <header>GPT Model</header>
                <p>
                    But how exactly does this work? SonnetCompleter was made using a
                    GPT (generative pre-trained transformer) model that built in PyTorch
                    and trained on a dataset of sonnets.

                    The key components of a transformer model are its embeddings and attention head.
                    In particular a transformer uses a multi-attention head which really means it has
                    a series of attention heads.
                    <br />
                    <br />
                    Attention is at the core of what makes a transformer so powerful. It is able to
                    to tell what tokens (the encoded characters) to couple together so that as the model trains,
                    these tokens are able to "interact" with each other and determine which tokens are more
                    closely related. Or, which tokens have more "attention".

                    Under the hood, this is done using the following equation:
                </p>
                <p align="center">
                    Attention(Q, K, V) = softmax(QK.T)V
                </p>
                <p>
                    In which Q, K, V represent the queries, keys and values repectively and are matrices.
                    Note K.T simply means transpose. We can think of the queries as the characters of which
                    we are asking to calculate the attention for, and the keys to be the characters of which
                    we are calcualting the attention against.
                </p>
                <p>
                    We then softmax this product and as a result get the weight of which we multiply the value against.
                    The purpose of this softmax is to. And so from this, we have calcualated what is called the
                    alignment/attention score which tells us how related the keys and queries are.

                    This can be though of we a weight and thus we multiply this to the value, V.
                </p>
                <p>
                    We stated previously that this transformers use an attention head.
                    GPT specificically uses a self-attention head, which essentially means that Q, K and V are values.
                    that all come from the same matrix. Attention is used more as a general function as cross-attention
                    also exists in which the value of Q, K and V would come from different matrices.

                    We take note of this fact as transformers can also be used in translation models,
                    which would likely use a cross-attention mechanism ub which Q would be from a target sequence
                    and K and V would be from the same source sequence. (When training we are in some ways trying to
                    map a source to its target)

                    However, since this is simply a document completer and there is no translation
                    task, there is no need for that.
                </p>
            </div>
        </div>
    )
}

export default About;