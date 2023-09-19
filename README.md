# Nest js Project

following <a href="https://www.youtube.com/watch?v=xzu3QXwo1BU&ab_channel=AnsontheDeveloper">Course</a>

## Lesson 1 Structure, Simple Controller, DTO

Root Module is app.module

to generate new files use cli:

- nest generate ... [name]
  - controller
  - module

useful decorators for controller:
decorators are prededefined functions.

@Get
@Post
@Param
@Query
@Controller

When dealing with data its handy to use DTO's to define what data is send to controller.

## Lesson 2 Validation

<a href="https://docs.nestjs.com/techniques/validation">Nest Docs</a>

### Validate Values in Body:

`yarn add class-validator class-transformer`

- use decorator from class Validator inside DTO to ensure validation
- add Validation Pipe to Controller `@UsePipes(new ValidationPipe())`

### Validate Data type in Param:

@Param('id', ParseIntPipe)

## Lesson 3 Services & Providers

Providers are injected.
Nestjs uses Dependency Injection.

### Lesson 4 Services

Take care of the Business Logic.
Seperation of Concerns.
`nest generate service /users/services/users` or
`nest g s /users/services/users`

every provider has @Injectable() Decorator.
This means Nest is able to do dependency injection

### Lesson 5 Middleware

Run before Controller.
Has access to Request and Response.

`nest generate middleware`

special way to register. Add as _Consumer_
``
export class UsersModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
consumer.apply(ExampleMiddleware).forRoutes('users');
}
}

``
