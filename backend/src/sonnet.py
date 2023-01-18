import torch
from src.gptModel.hyperparams import block_size, encode, decode, device
from src.gptModel.gpt import gptModel

class Sonnet:
    def create_sonnet(self, context):
        """
        Generates a sonnet given a context using the gpt model

        Args:
            context (String): the starting sequence of the sonnet

        Returns:
            String: the fully generated sonnet based on the context

        Raises:
            ValueError: context length is larger than the block size defined for gpt model
        """
        if len(context) > block_size:
            raise ValueError(f"context length can be max {block_size} characters")
        if len(context) == 0:
            data_input = torch.tensor([encode(context)], dtype=torch.long)
        else:
            torch.zeros((1, 1), dtype=torch.long, device=device)
            data_input = torch.tensor([encode(context)], dtype=torch.long)

        return str(decode(gptModel.generate(data_input, max_new_tokens=500)[0].tolist()))



global sonnet
sonnet = Sonnet()