defmodule Fac do
  @moduledoc """
  Documentation for Fac.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Fac.hello()
      :world

  """
  def hello do
    :world
  end


    def map([a | rest], fun) do 
        results = [fun.(a)]
        map(rest, fun, results)
    end

    def map([a | rest],fun, results) do 
        map(rest, fun, results ++ [fun.(a)])
    end 

    def map([], fun, results) do
      results
    end

    #map(my_first_list, fn x -> x * 2 end)
    #[0,2,4,6,8,10]
end
