namespace backend.DTOs;

public class UserResponse
{
    public int UserID { get; set; }
    public string UserGivenName { get; set; } = null!;
    public string UserFamilyName { get; set; } = null!;
    public string UserEmail { get; set; } = null!;
    public DateTime CreatedDateTime { get; set; }
}
