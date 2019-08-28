class OrganizationDeleteUsers
  def self.delete_users(organization_id, users_id)
    organization = Organization.find(organization_id)
    users_id.split(',').each do |id|
      UserOrganization.find_by(organization_id: organization_id, user_id: id).destroy
      UserMailer.with(user: User.find(id), organization: organization).delete_email.deliver_later
    end
  end
end
