defmodule DivvyReactChallengeWeb.CoordinateController do
    use DivvyReactChallengeWeb, :controller
  
    def index(conn, %{"x" => x, "y" => y}) do
        y = String.to_integer(y)
        x = String.to_integer(x)
        itemId = 1/2 * :math.pow(y,2) + (x - 1.5) * y + (:math.pow(x,2) - x) / 2 + 1
        other = :erlang.float_to_binary(itemId, decimals: 0)
        text conn, other
    end

  end
  