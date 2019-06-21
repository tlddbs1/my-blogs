package com.tenine.blog.API;

import com.tenine.blog.domain.posts.Posts;
import com.tenine.blog.domain.posts.PostsRepository;
import com.tenine.blog.domain.posts.PostsSaveDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class APIController {

    Logger log = LoggerFactory.getLogger(APIController.class);

    @Autowired
    public PostsRepository postsRepository;

    @GetMapping("/blog")
    public  List<Posts> getMain(HttpServletRequest req,
                                HttpServletResponse res){
        res.setHeader("Access-Control-Allow-Origin" , "*");
        List<Posts> list = postsRepository.findAll();
        return list;
    }

    @PostMapping("/save")
    public void saveBlog(HttpServletRequest req
            , HttpServletResponse res
            , @RequestBody PostsSaveDto postsSaveDto) {
        res.setHeader("Access-Control-Allow-Origin" , "*");
        res.setHeader("Access-Control-Allow-Methods" , "OPTIONS");
        res.setHeader("Access-Control-Max-Age", "3600");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
        res.setContentType("application/json");
        log.warn(">> input data posts ::" + postsSaveDto.getTitle());
        postsRepository.save(postsSaveDto.toEntity());


    }
}
