package com.ncs.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@SpringBootApplication
@RestController
public class TestApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestApiApplication.class, args);
    }

    @GetMapping(value = "/get")
    @CrossOrigin
    public String get(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @PostMapping(value = "/post")
    @CrossOrigin
    public String post(@RequestBody(required = false) Test test) {
        return String.format("Hello %s!", test.getName());
    }

    @PostMapping(value = "/post2")
    @CrossOrigin
    public String post2(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

}