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
    public  List<Posts> getList(HttpServletRequest req,
                                HttpServletResponse res){
        res.setHeader("Access-Control-Allow-Origin" , "*");
        List<Posts> list = postsRepository.findAll();
        return list;
    }

    @GetMapping("/blog/{idx}")
    public Posts getOne(@PathVariable("idx") Long idx){
        return postsRepository.getOne(idx);
    }

    @PostMapping("/blog")
    public void postBlog(HttpServletRequest req
            , HttpServletResponse res
            , @RequestBody PostsSaveDto postsSaveDto
            , @PathVariable("idx") Long idx) {
        res.setContentType("application/json");
        log.warn(">> input data posts ::" + postsSaveDto.getTitle());
        postsSaveDto.setIdx(idx);
        postsRepository.save(postsSaveDto.toEntity());
    }

    @DeleteMapping("/blog/{idx}")
    public void delete(@PathVariable("idx") Long idx){
        postsRepository.deleteById(idx);
    }

    @PutMapping("/blog/{idx}")
    public void putBlog(HttpServletRequest req
                        , HttpServletResponse res
                        , @RequestBody PostsSaveDto postsSaveDto
                        , @PathVariable("idx") Long idx) {
        log.warn(">> input data posts ::" + postsSaveDto.getTitle());
        postsSaveDto.setIdx(idx);
        postsRepository.save(postsSaveDto.toEntity());
    }
}
