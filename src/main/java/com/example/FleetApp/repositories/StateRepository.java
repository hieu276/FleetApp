package com.example.FleetApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FleetApp.models.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

}
