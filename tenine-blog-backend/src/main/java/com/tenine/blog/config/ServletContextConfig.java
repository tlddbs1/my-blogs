package com.tenine.blog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ServletContextConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods(HttpMethod.GET.name() , HttpMethod.OPTIONS.name(),HttpMethod.PUT.name())
                .maxAge(1728000);
    }
}
