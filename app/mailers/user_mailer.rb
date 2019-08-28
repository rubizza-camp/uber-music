class UserMailer < ApplicationMailer
  default from: 'default@example.com'

  def invite_email
    @organization = params[:organization]
    @user = params[:user]
    @url  = "/organizations/#{@organization.id}/confirmation"
    mail(to: @user.email, subject: "Invite to organization #{@organization.name}")
  end

  def delete_email
    @organization = params[:organization]
    @user = params[:user]
    mail(to: @user.email, subject: "Kiked out from #{@organization.name}")
  end
end
