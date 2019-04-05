defmodule DivvyReactChallengeWeb.CoordinateController do
    use DivvyReactChallengeWeb, :controller
  
    def index(conn, %{"x" => x, "y" => y}) do
        y = String.to_integer(y)
        x = String.to_integer(x)
        itemId = 1/2 * :math.pow(y,2) + (x - 1.5) * y + (:math.pow(x,2) - x) / 2 + 1
        other = :erlang.float_to_binary(itemId, decimals: 0)
        text conn, other
    end


    # I came up with a few solutions and utlimately decided with the mathematical one because I felt it was better for performance.  I probably wouldn't chose this if readability was more important.

    # Since recursive was requested, I included that below:

    # defmodule Main do

    #     def init(x,y) do
    #         count = 0
    #         getYValue(x-1, y-1, count)
    #     end
        
    #     def getXValue(x, count) do
    #         if x >= 0 do
    #             getXValue(x-1, count + x + 1)
    #         else
    #             IO.puts count
    #         end
    #     end
        
    #     def getYValue(x, y, count) do
    #         if y > 0 do
    #             getYValue(x, y-1, count + y + x)
    #         else
    #             getXValue(x, count)
    #         end
    #     end
    
    # end
    
    # Main.init(100000,100000)

  end
  