package com.tenine.blog.domain.posts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.tenine.blog.domain.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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
    public Posts(String title, String contents, Long idx) {
        this.title = title;
        this.contents = contents;
        this.idx = idx;
    }
}
