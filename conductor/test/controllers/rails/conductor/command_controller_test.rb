# frozen_string_literal: true

require "test_helper"

class Rails::Conductor::CommandControllerTest < ActionDispatch::IntegrationTest
  def dummy_user
    "#{Rails.root}/app/models/user.rb"
  end
  test "generate scaffold" do
    with_rails_env("development") do
      post rails_conductor_generator_path, params: {
        user: {
          name: :string
        }
      }

      assert File.exist?(dummy_user)

      Rails::Command.invoke "destroy", ["scaffold", "User"]
    end
  end

  private
    def with_rails_env(env)
      old_rails_env = Rails.env
      Rails.env = env
      yield
    ensure
      Rails.env = old_rails_env
    end
end
