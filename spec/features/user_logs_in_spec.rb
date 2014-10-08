require 'rails_helper'

feature 'User logs in', js: true do
  scenario 'successfully' do
    sign_in
    expect(page).to have_css 'h1', text: 'Welcome'
  end
end
