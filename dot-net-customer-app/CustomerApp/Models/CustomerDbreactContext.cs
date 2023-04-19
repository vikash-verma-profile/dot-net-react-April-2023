using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CustomerApp.Models;

public partial class CustomerDbreactContext : DbContext
{
    public CustomerDbreactContext()
    {
    }

    public CustomerDbreactContext(DbContextOptions<CustomerDbreactContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<TblLogin> TblLogins { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-PP0TB7N;Initial Catalog=CustomerDbreact;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.ToTable("Customer");

            entity.Property(e => e.CustomerCode).HasMaxLength(50);
            entity.Property(e => e.CustomerName).HasMaxLength(50);
        });

        modelBuilder.Entity<TblLogin>(entity =>
        {
            entity.ToTable("TblLogin");

            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
