require "rails_helper"

feature 'User visits homepage', js: true do
  scenario 'successfully' do
    visit root_path
    expect(page).to have_css 'h1', text: 'Talent'
  end
end
