package com.example.FleetApp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.FleetApp.models.Location;

@Repository
public interface LocationRepository extends CrudRepository<Location, Integer> {

}
