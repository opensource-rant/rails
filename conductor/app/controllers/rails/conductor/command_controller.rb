# frozen_string_literal: true

class Rails::Conductor::CommandController < Rails::Conductor::BaseController
  def generate
    Rails::Command.invoke "generate", command_params
  end


  private
    def capture_stdout
      original_stdout, $stdout = $stdout, StringIO.new
      yield
      $stdout.string
    ensure
      $stdout = original_stdout
    end

    def command_params
      @command_params ||= params.require(:command).permit(:namespace, options:[])
    end
end
