module Features
  def sign_in
    User.create(email: 'test@test.com', password: 'testtest')
    visit root_path
    click_on 'Log In'
    fill_in 'Email', :with => 'test@test.com'
    fill_in 'Password', :with => 'testtest'
    click_button 'Log In'
    save_screenshot('log/snapshot.png')
  end
end
