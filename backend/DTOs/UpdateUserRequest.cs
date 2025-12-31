using System.ComponentModel.DataAnnotations;

namespace backend.DTOs;

public class UpdateUserRequest
{
    [Required]
    [MaxLength(100)]
    public required string UserGivenName { get; set; }

    [Required]
    [MaxLength(100)]
    public required string UserFamilyName { get; set; }

    [Required]
    [MaxLength(100)]
    [EmailAddress]
    public required string UserEmail { get; set; }
}
