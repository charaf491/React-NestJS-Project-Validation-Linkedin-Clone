import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  ParseUUIDPipe,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Cookie } from 'src/common/decorators/cookie.decorator';
import { AuthService } from 'src/auth/auth.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private authService: AuthService,
  ) {}

  @Post('create')
  @HttpCode(201)
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @Cookie('accessToken') accessToken: string,
  ) {
    const userID = this.authService.getUserIDFromToken(accessToken);
    return this.postsService.create(userID, createPostDto);
  }

  @Get()
  findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return this.postsService.findAll(page);
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.postsService.findOne(id);
  }

  @Put('like/:id')
  async likePost(
    @Param('id', ParseUUIDPipe) postID: string,
    @Cookie('accessToken') accessToken: string,
  ) {
    const userID = this.authService.getUserIDFromToken(accessToken);
    return this.postsService.likePost(userID, postID);
  }

  @Put('unlike/:id')
  async unlikePost(
    @Param('id', ParseUUIDPipe) postID: string,
    @Cookie('accessToken') accessToken: string,
  ) {
    const userID = this.authService.getUserIDFromToken(accessToken);
    return this.postsService.unlikePost(userID, postID);
  }

  @Put('edit/:id')
  async editPost(
    @Param('id', ParseUUIDPipe) postID: string,
    @Cookie('accessToken') accessToken: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    const userID = this.authService.getUserIDFromToken(accessToken);
    return this.postsService.editPost(userID, postID, updatePostDto);
  }

  @Delete(':id')
  async deletePost(
    @Param('id', ParseUUIDPipe) postID: string,
    @Cookie('accessToken') accessToken: string,
  ) {
    const userID = this.authService.getUserIDFromToken(accessToken);
    return this.postsService.deletePost(userID, postID);
  }
}
