# TODO scripting to loop through all h2 and h3 in posts and create json

require 'pandoc-ruby'
@converter = PandocRuby.new('<p><em>dummy</em></p>','html2markdown')