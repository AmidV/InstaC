import { FlatList } from "react-native";
import PostListItem from "~/src/components/PostListItem";
import posts from '~/assets/data/posts.json';

export default function FeedPage() {
   return(
    <FlatList 
        data={posts} 
        renderItem={({item}) => <PostListItem post={item}/>}
        contentContainerStyle={{ gap:13 }}
        showsVerticalScrollIndicator = {false}
    />
   )
    
}