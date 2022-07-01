package com.example.FleetApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FleetApp.models.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
