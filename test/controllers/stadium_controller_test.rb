require 'test_helper'

class StadiumControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stadium_index_url
    assert_response :success
  end

  test "should get about" do
    get stadium_about_url
    assert_response :success
  end

  test "should get blog" do
    get stadium_blog_url
    assert_response :success
  end

  test "should get players" do
    get stadium_players_url
    assert_response :success
  end

end
