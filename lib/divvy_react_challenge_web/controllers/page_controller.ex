defmodule DivvyReactChallengeWeb.PageController do
  use DivvyReactChallengeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
