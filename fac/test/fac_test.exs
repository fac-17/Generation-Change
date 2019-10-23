defmodule FacTest do
  use ExUnit.Case
  doctest Fac

  test "greets the world" do
    assert Fac.hello() == :world
  end

  test "maps" do 
  assert Fac.map([1,2,3],fn x -> x * 2 end) == [2,4,6]
  end 
end
