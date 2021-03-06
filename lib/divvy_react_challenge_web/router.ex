defmodule DivvyReactChallengeWeb.Router do
  use DivvyReactChallengeWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", DivvyReactChallengeWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/", DivvyReactChallengeWeb do
    pipe_through :api

    get "/getItemId", CoordinateController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", DivvyReactChallengeWeb do
  #   pipe_through :api
  # end
end
