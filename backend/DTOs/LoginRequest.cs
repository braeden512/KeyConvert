using System.ComponentModel.DataAnnotations;

namespace backend.DTOs;

public class LoginRequest
{
    [Required]
    [EmailAddress]
    public required string UserEmail { get; set; }

    [Required]
    public required string UserPassword { get; set; }
}
