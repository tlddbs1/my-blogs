package com.tenine.blog.domain.posts;

import com.tenine.blog.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.Nullable;

@Getter
@Setter
@NoArgsConstructor
public class PostsSaveDto  {
    private Long idx;
    private String title;
    private String contents;

    public Posts toEntity(){
        return Posts.builder()
                .title(title)
                .contents(contents)
                .idx(idx)
                .build();
    }
}
