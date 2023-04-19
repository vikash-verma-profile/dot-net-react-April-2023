using System;
using System.Collections.Generic;

namespace CustomerApp.Models;

public partial class TblLogin
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public string? Password { get; set; }
}
