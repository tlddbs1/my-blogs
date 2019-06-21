package com.tenine.blog;

import com.tenine.blog.domain.posts.Posts;
import com.tenine.blog.domain.posts.PostsRepository;
import static org.junit.Assert.assertThat;

import static org.hamcrest.CoreMatchers.is;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostsRepositoryTest {

    @Autowired
    private PostsRepository postsRepository;

    @Test
    public void 블로그_저장_불러오기() {

        //given :: test 준비단계
        postsRepository.save(Posts.builder().title("안녕하세요 빨루라리라.")
                                            .contents("안녕하세요 반값습니다.안녕하세요 반값습니다.안녕하세요 반값습니다.안녕하세요 반값습니다.안녕하세요 반값습니다.안녕하세요 반값습니다.")
                                            .build()
                            );

        //when :: 테스트 행위
        List<Posts> list = postsRepository.findAll();

        //then ::결과 검증
        Posts posts = list.get(list.size()-1);
        assertThat(posts.getTitle(), is("안녕하세요 빨루라리라."));
    }

    @Test
    public void 블로그_글_수정(){
        postsRepository.save(Posts.builder().title("안녕하세요")
                                            .contents("룰루라라리")
                                            .idx(3L)
                                            .build());
    }

    @Test
    public void 블로그_글_삭제(){
        postsRepository.deleteById(3L);
    }
}
