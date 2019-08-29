class UserMailer < ApplicationMailer
  default from: 'default@example.com'

  def invite_email
    @organization = params[:organization]
    @user = params[:user]
    @url  = "/organizations/#{@organization.id}/confirm"
    mail(to: @user.email, subject: "Invite to organization #{@organization.name}")
  end
end
