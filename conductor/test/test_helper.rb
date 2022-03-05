
ENV["RAILS_ENV"] = "test"

require_relative "../../actionmailbox/test/dummy/config/environment"
ActiveRecord::Migrator.migrations_paths = [File.expand_path("../../actionmailbox/test/dummy/db/migrate", __dir__)]
require "rails/test_help"
