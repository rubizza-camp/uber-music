module OrganizationHelper
  def check_current_organization?(organization)
    flash[:message] && current_user.organization_ids.index(organization)
  end
end
