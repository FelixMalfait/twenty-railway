import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineProgressWhereUniqueInput } from './pipeline-progress-where-unique.input';
import { Type } from 'class-transformer';
import { PipelineProgressUpdateWithoutPipelineInput } from './pipeline-progress-update-without-pipeline.input';

@InputType()
export class PipelineProgressUpdateWithWhereUniqueWithoutPipelineInput {

    @Field(() => PipelineProgressWhereUniqueInput, {nullable:false})
    @Type(() => PipelineProgressWhereUniqueInput)
    where!: PipelineProgressWhereUniqueInput;

    @Field(() => PipelineProgressUpdateWithoutPipelineInput, {nullable:false})
    @Type(() => PipelineProgressUpdateWithoutPipelineInput)
    data!: PipelineProgressUpdateWithoutPipelineInput;
}
