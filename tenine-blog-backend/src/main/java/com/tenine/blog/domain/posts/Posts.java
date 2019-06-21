package com.tenine.blog.domain.posts;

import com.tenine.blog.domain.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="posts")
public class Posts extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(length=200 , nullable = false )
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false )
    private String contents;

    @Builder
    public Posts(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }
}
