package com.tenine.blog.API;

import com.tenine.blog.domain.posts.Posts;
import com.tenine.blog.domain.posts.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class APIController {

    @Autowired
    public PostsRepository postsRepository;

    @GetMapping("/blog")
    public  List<Posts> getMain(HttpServletRequest req,
                                HttpServletResponse res){
        res.setHeader("Access-Control-Allow-Origin" , "*");
        List<Posts> list = postsRepository.findAll();
        return list;
    }

}
