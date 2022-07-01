package com.example.FleetApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FleetApp.models.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {

}
