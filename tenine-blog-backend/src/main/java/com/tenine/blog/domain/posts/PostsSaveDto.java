package com.tenine.blog.domain.posts;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostsSaveDto {
    private String title;
    private String contents;

    public Posts toEntity(){
        return Posts.builder()
                .title(title)
                .contents(contents)
                .build();
    }
}
