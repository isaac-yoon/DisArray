# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


# Camelize hash keys before converting hash to json
# Automatically camelize the keys of any outgoing jsons
Jbuilder.key_format camelize: :lower

