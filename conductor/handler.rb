require 'json'

def hello(event:, context:)
  File.open('test', 'w') do |file|
    file.write event
  end
end
