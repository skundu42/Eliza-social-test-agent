import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/eliza/markdown-page/',
    component: ComponentCreator('/eliza/markdown-page/', 'ae7'),
    exact: true
  },
  {
    path: '/eliza/api/',
    component: ComponentCreator('/eliza/api/', '3d1'),
    routes: [
      {
        path: '/eliza/api/',
        component: ComponentCreator('/eliza/api/', '4df'),
        routes: [
          {
            path: '/eliza/api/',
            component: ComponentCreator('/eliza/api/', '9dd'),
            routes: [
              {
                path: '/eliza/api/',
                component: ComponentCreator('/eliza/api/', 'ab3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/AgentRuntime/',
                component: ComponentCreator('/eliza/api/classes/AgentRuntime/', 'd9a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/CacheManager/',
                component: ComponentCreator('/eliza/api/classes/CacheManager/', 'c20'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/DatabaseAdapter/',
                component: ComponentCreator('/eliza/api/classes/DatabaseAdapter/', '0c3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/DbCacheAdapter/',
                component: ComponentCreator('/eliza/api/classes/DbCacheAdapter/', '120'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/FsCacheAdapter/',
                component: ComponentCreator('/eliza/api/classes/FsCacheAdapter/', 'c52'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/MemoryCacheAdapter/',
                component: ComponentCreator('/eliza/api/classes/MemoryCacheAdapter/', '5c6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/MemoryManager/',
                component: ComponentCreator('/eliza/api/classes/MemoryManager/', 'df3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/classes/Service/',
                component: ComponentCreator('/eliza/api/classes/Service/', 'f8d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/Clients/',
                component: ComponentCreator('/eliza/api/enumerations/Clients/', '0cc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/GoalStatus/',
                component: ComponentCreator('/eliza/api/enumerations/GoalStatus/', 'be0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/LoggingLevel/',
                component: ComponentCreator('/eliza/api/enumerations/LoggingLevel/', 'bdd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/ModelClass/',
                component: ComponentCreator('/eliza/api/enumerations/ModelClass/', 'bcf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/ModelProviderName/',
                component: ComponentCreator('/eliza/api/enumerations/ModelProviderName/', '3eb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/enumerations/ServiceType/',
                component: ComponentCreator('/eliza/api/enumerations/ServiceType/', '127'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/addHeader/',
                component: ComponentCreator('/eliza/api/functions/addHeader/', 'de6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/composeActionExamples/',
                component: ComponentCreator('/eliza/api/functions/composeActionExamples/', 'adf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/composeContext/',
                component: ComponentCreator('/eliza/api/functions/composeContext/', 'a5d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/configureSettings/',
                component: ComponentCreator('/eliza/api/functions/configureSettings/', 'f1f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/createGoal/',
                component: ComponentCreator('/eliza/api/functions/createGoal/', '324'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/createRelationship/',
                component: ComponentCreator('/eliza/api/functions/createRelationship/', 'b80'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/embed/',
                component: ComponentCreator('/eliza/api/functions/embed/', '67d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/findNearestEnvFile/',
                component: ComponentCreator('/eliza/api/functions/findNearestEnvFile/', 'd74'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatActionNames/',
                component: ComponentCreator('/eliza/api/functions/formatActionNames/', '44f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatActions/',
                component: ComponentCreator('/eliza/api/functions/formatActions/', 'cba'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatActors/',
                component: ComponentCreator('/eliza/api/functions/formatActors/', '2fb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatEvaluatorExampleDescriptions/',
                component: ComponentCreator('/eliza/api/functions/formatEvaluatorExampleDescriptions/', '8b0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatEvaluatorExamples/',
                component: ComponentCreator('/eliza/api/functions/formatEvaluatorExamples/', 'e28'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatEvaluatorNames/',
                component: ComponentCreator('/eliza/api/functions/formatEvaluatorNames/', '07e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatEvaluators/',
                component: ComponentCreator('/eliza/api/functions/formatEvaluators/', '350'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatGoalsAsString/',
                component: ComponentCreator('/eliza/api/functions/formatGoalsAsString/', '688'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatMessages/',
                component: ComponentCreator('/eliza/api/functions/formatMessages/', 'a6f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatPosts/',
                component: ComponentCreator('/eliza/api/functions/formatPosts/', '816'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatRelationships/',
                component: ComponentCreator('/eliza/api/functions/formatRelationships/', '650'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/formatTimestamp/',
                component: ComponentCreator('/eliza/api/functions/formatTimestamp/', '9dd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateCaption/',
                component: ComponentCreator('/eliza/api/functions/generateCaption/', 'ebd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateImage/',
                component: ComponentCreator('/eliza/api/functions/generateImage/', '7a5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateMessageResponse/',
                component: ComponentCreator('/eliza/api/functions/generateMessageResponse/', 'ae5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateObject/',
                component: ComponentCreator('/eliza/api/functions/generateObject/', '142'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateObjectArray/',
                component: ComponentCreator('/eliza/api/functions/generateObjectArray/', '193'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateObjectV2/',
                component: ComponentCreator('/eliza/api/functions/generateObjectV2/', '9f6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateShouldRespond/',
                component: ComponentCreator('/eliza/api/functions/generateShouldRespond/', 'b4f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateText/',
                component: ComponentCreator('/eliza/api/functions/generateText/', 'a7e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateTextArray/',
                component: ComponentCreator('/eliza/api/functions/generateTextArray/', 'fce'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateTrueOrFalse/',
                component: ComponentCreator('/eliza/api/functions/generateTrueOrFalse/', 'c47'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/generateWebSearch/',
                component: ComponentCreator('/eliza/api/functions/generateWebSearch/', '6bd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getActorDetails/',
                component: ComponentCreator('/eliza/api/functions/getActorDetails/', '616'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getEmbeddingConfig/',
                component: ComponentCreator('/eliza/api/functions/getEmbeddingConfig/', '1cf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getEmbeddingType/',
                component: ComponentCreator('/eliza/api/functions/getEmbeddingType/', 'e70'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getEmbeddingZeroVector/',
                component: ComponentCreator('/eliza/api/functions/getEmbeddingZeroVector/', 'db5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getEndpoint/',
                component: ComponentCreator('/eliza/api/functions/getEndpoint/', 'da8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getEnvVariable/',
                component: ComponentCreator('/eliza/api/functions/getEnvVariable/', '990'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getGoals/',
                component: ComponentCreator('/eliza/api/functions/getGoals/', '0fe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getModel/',
                component: ComponentCreator('/eliza/api/functions/getModel/', 'b8a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getProviders/',
                component: ComponentCreator('/eliza/api/functions/getProviders/', '263'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getRelationship/',
                component: ComponentCreator('/eliza/api/functions/getRelationship/', '966'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/getRelationships/',
                component: ComponentCreator('/eliza/api/functions/getRelationships/', '5ec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/handleProvider/',
                component: ComponentCreator('/eliza/api/functions/handleProvider/', '090'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/hasEnvVariable/',
                component: ComponentCreator('/eliza/api/functions/hasEnvVariable/', '26e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/loadEnvConfig/',
                component: ComponentCreator('/eliza/api/functions/loadEnvConfig/', '78c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/parseBooleanFromText/',
                component: ComponentCreator('/eliza/api/functions/parseBooleanFromText/', 'f37'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/parseJsonArrayFromText/',
                component: ComponentCreator('/eliza/api/functions/parseJsonArrayFromText/', '3b1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/parseJSONObjectFromText/',
                component: ComponentCreator('/eliza/api/functions/parseJSONObjectFromText/', '06d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/parseShouldRespondFromText/',
                component: ComponentCreator('/eliza/api/functions/parseShouldRespondFromText/', '593'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/splitChunks/',
                component: ComponentCreator('/eliza/api/functions/splitChunks/', '546'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/stringToUuid/',
                component: ComponentCreator('/eliza/api/functions/stringToUuid/', 'bfc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/trimTokens/',
                component: ComponentCreator('/eliza/api/functions/trimTokens/', 'a85'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/updateGoal/',
                component: ComponentCreator('/eliza/api/functions/updateGoal/', '905'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/validateCharacterConfig/',
                component: ComponentCreator('/eliza/api/functions/validateCharacterConfig/', 'e6c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/functions/validateEnv/',
                component: ComponentCreator('/eliza/api/functions/validateEnv/', '57d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Account/',
                component: ComponentCreator('/eliza/api/interfaces/Account/', '707'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Action/',
                component: ComponentCreator('/eliza/api/interfaces/Action/', 'df5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ActionExample/',
                component: ComponentCreator('/eliza/api/interfaces/ActionExample/', '983'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Actor/',
                component: ComponentCreator('/eliza/api/interfaces/Actor/', '527'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Content/',
                component: ComponentCreator('/eliza/api/interfaces/Content/', '1d1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ConversationExample/',
                component: ComponentCreator('/eliza/api/interfaces/ConversationExample/', '45c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/EvaluationExample/',
                component: ComponentCreator('/eliza/api/interfaces/EvaluationExample/', '650'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Evaluator/',
                component: ComponentCreator('/eliza/api/interfaces/Evaluator/', '144'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/GenerationOptions/',
                component: ComponentCreator('/eliza/api/interfaces/GenerationOptions/', 'ed0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Goal/',
                component: ComponentCreator('/eliza/api/interfaces/Goal/', '8bb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IAgentRuntime/',
                component: ComponentCreator('/eliza/api/interfaces/IAgentRuntime/', '5ce'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IBrowserService/',
                component: ComponentCreator('/eliza/api/interfaces/IBrowserService/', '950'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ICacheAdapter/',
                component: ComponentCreator('/eliza/api/interfaces/ICacheAdapter/', '00c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ICacheManager/',
                component: ComponentCreator('/eliza/api/interfaces/ICacheManager/', '6dc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IDatabaseAdapter/',
                component: ComponentCreator('/eliza/api/interfaces/IDatabaseAdapter/', '23e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IDatabaseCacheAdapter/',
                component: ComponentCreator('/eliza/api/interfaces/IDatabaseCacheAdapter/', '9ba'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IImageDescriptionService/',
                component: ComponentCreator('/eliza/api/interfaces/IImageDescriptionService/', '64a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IMemoryManager/',
                component: ComponentCreator('/eliza/api/interfaces/IMemoryManager/', '102'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IPdfService/',
                component: ComponentCreator('/eliza/api/interfaces/IPdfService/', '280'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ISpeechService/',
                component: ComponentCreator('/eliza/api/interfaces/ISpeechService/', 'bdb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ITextGenerationService/',
                component: ComponentCreator('/eliza/api/interfaces/ITextGenerationService/', '47b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/ITranscriptionService/',
                component: ComponentCreator('/eliza/api/interfaces/ITranscriptionService/', '003'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/IVideoService/',
                component: ComponentCreator('/eliza/api/interfaces/IVideoService/', 'b83'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Memory/',
                component: ComponentCreator('/eliza/api/interfaces/Memory/', '725'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/MessageExample/',
                component: ComponentCreator('/eliza/api/interfaces/MessageExample/', '8ff'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Objective/',
                component: ComponentCreator('/eliza/api/interfaces/Objective/', '3a8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Participant/',
                component: ComponentCreator('/eliza/api/interfaces/Participant/', '9d5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Provider/',
                component: ComponentCreator('/eliza/api/interfaces/Provider/', '870'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Relationship/',
                component: ComponentCreator('/eliza/api/interfaces/Relationship/', '3fd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/Room/',
                component: ComponentCreator('/eliza/api/interfaces/Room/', 'eec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/interfaces/State/',
                component: ComponentCreator('/eliza/api/interfaces/State/', '76a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/CacheOptions/',
                component: ComponentCreator('/eliza/api/type-aliases/CacheOptions/', '8ec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Character/',
                component: ComponentCreator('/eliza/api/type-aliases/Character/', '962'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/CharacterConfig/',
                component: ComponentCreator('/eliza/api/type-aliases/CharacterConfig/', '7b7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Client/',
                component: ComponentCreator('/eliza/api/type-aliases/Client/', '89c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/EnvConfig/',
                component: ComponentCreator('/eliza/api/type-aliases/EnvConfig/', 'ec1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Handler/',
                component: ComponentCreator('/eliza/api/type-aliases/Handler/', '501'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/HandlerCallback/',
                component: ComponentCreator('/eliza/api/type-aliases/HandlerCallback/', '613'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/KnowledgeItem/',
                component: ComponentCreator('/eliza/api/type-aliases/KnowledgeItem/', 'b20'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Media/',
                component: ComponentCreator('/eliza/api/type-aliases/Media/', 'ddd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Model/',
                component: ComponentCreator('/eliza/api/type-aliases/Model/', 'f1d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Models/',
                component: ComponentCreator('/eliza/api/type-aliases/Models/', 'bd2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Plugin/',
                component: ComponentCreator('/eliza/api/type-aliases/Plugin/', '826'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/SearchResponse/',
                component: ComponentCreator('/eliza/api/type-aliases/SearchResponse/', 'eb9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/SearchResult/',
                component: ComponentCreator('/eliza/api/type-aliases/SearchResult/', 'cbb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/UUID/',
                component: ComponentCreator('/eliza/api/type-aliases/UUID/', '5d4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/type-aliases/Validator/',
                component: ComponentCreator('/eliza/api/type-aliases/Validator/', '1f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/booleanFooter/',
                component: ComponentCreator('/eliza/api/variables/booleanFooter/', '774'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/CharacterSchema/',
                component: ComponentCreator('/eliza/api/variables/CharacterSchema/', '06b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/defaultCharacter/',
                component: ComponentCreator('/eliza/api/variables/defaultCharacter/', 'c52'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/elizaLogger/',
                component: ComponentCreator('/eliza/api/variables/elizaLogger/', '593'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/envSchema/',
                component: ComponentCreator('/eliza/api/variables/envSchema/', 'c0f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/evaluationTemplate/',
                component: ComponentCreator('/eliza/api/variables/evaluationTemplate/', '43f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/knowledge/',
                component: ComponentCreator('/eliza/api/variables/knowledge/', '234'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/messageCompletionFooter/',
                component: ComponentCreator('/eliza/api/variables/messageCompletionFooter/', '951'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/models/',
                component: ComponentCreator('/eliza/api/variables/models/', '971'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/settings/',
                component: ComponentCreator('/eliza/api/variables/settings/', 'c37'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/shouldRespondFooter/',
                component: ComponentCreator('/eliza/api/variables/shouldRespondFooter/', '1f3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/api/variables/stringArrayFooter/',
                component: ComponentCreator('/eliza/api/variables/stringArrayFooter/', 'a5a'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/eliza/community/',
    component: ComponentCreator('/eliza/community/', '329'),
    routes: [
      {
        path: '/eliza/community/',
        component: ComponentCreator('/eliza/community/', '72a'),
        routes: [
          {
            path: '/eliza/community/',
            component: ComponentCreator('/eliza/community/', '0e2'),
            routes: [
              {
                path: '/eliza/community/',
                component: ComponentCreator('/eliza/community/', 'a76'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/creator-fund/',
                component: ComponentCreator('/eliza/community/creator-fund/', '590'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-10-27/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-10-27/', 'dd0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-10-28/', '75f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-10-29/', 'a5e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-10-30/', 'c90'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-10-31/', '75a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-01/', '57e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-02/', '8bd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-03/', '00f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-04/', 'cd2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-05/', '1e0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-06/', '399'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-07/', '164'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-08/', '7ea'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-09/', '809'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-10/', '2f0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-11/', 'b7a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-12/', '9e6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-13/', '346'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-14/', 'e82'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-15/', '216'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-16/', '645'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-17/', 'bd3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-18/', '490'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-19/', '66c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-20/', 'af9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-21/', '86d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-22/', 'ece'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-23/', '465'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-24/', '683'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-25/', '13c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/coders/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/development/coders/chat_2024-11-26/', 'c23'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-20/', '2f0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-21/', 'ab9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-22/', '7af'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-23/', '658'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-24/', '295'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-25/', '1b4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-contributors/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-contributors/chat_2024-11-26/', '3ca'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-11/', '5db'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-12/', 'eca'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-15/', '535'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-16/', '0ee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-17/', '2c7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-18/', '36d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-19/', 'a73'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-20/', 'a8e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-22/', '6dc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-24/', '945'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/development/dev-vc/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/development/dev-vc/chat_2024-11-26/', '392'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-18/', '891'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-19/', '197'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-20/', '908'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-21/', 'a7d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-22/', '3a0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-23/', '179'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-24/', '651'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-25/', 'c59'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/degenspartanai/chat_2024-11-26/', '3bd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-20/', 'da5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-21/', '81d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-22/', '33d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-23/', '469'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-24/', '841'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-25/', 'd93'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-26/', '30e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-27/', '774'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-28/', '5c2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-29/', '5da'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-06-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-06-30/', '182'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-01/', '2cf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-02/', '980'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-03/', '543'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-04/', 'e19'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-05/', '2b5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-06/', '77b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-07/', '4b4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-08/', 'dc0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-09/', '34a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-10/', '089'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-11/', 'b18'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-12/', '0e4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-13/', '7cd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-14/', '36a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-15/', '4d6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-16/', 'c97'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-17/', '8d2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-18/', '603'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-19/', '071'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-20/', '70c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-21/', '3de'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-22/', '658'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-23/', '043'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-24/', '8f3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-25/', '435'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-26/', '014'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-29/', '68c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-07-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-07-30/', '781'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-08-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-08-07/', '1de'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-08-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-08-12/', '6eb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-08-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-08-15/', 'dec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-08-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-08-17/', '468'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-08/', 'b23'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-09/', '4c5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-10/', 'ea4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-11/', 'a8e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-12/', '59c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-13/', 'f1b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-17/', 'b46'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-18/', '84e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-23/', '375'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-09-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-09-27/', '9c9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-03/', 'c68'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-04/', '77c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-05/', '654'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-16/', '42f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-17/', '603'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-22/', '0a2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-23/', 'fde'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-24/', '05b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-25/', '702'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-26/', '362'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-27/', '1a8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-28/', 'bb2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-29/', '424'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-30/', 'beb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-10-31/', 'e9f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-01/', '83f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-02/', '206'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-03/', '83a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-04/', '895'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-05/', '91a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-06/', '4f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-07/', '0e2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-08/', '405'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-09/', '093'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-10/', '1a6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-11/', '0d7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-12/', 'c30'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-13/', 'bc2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-14/', 'eb7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-15/', 'a17'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-16/', 'bf1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-17/', 'aaf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-18/', '524'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-19/', 'a09'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-20/', 'cef'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-21/', 'c53'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-22/', '48f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-23/', '71f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-24/', '343'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-25/', 'b6c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/discussion/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/discussion/chat_2024-11-26/', 'ed8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-29/', 'd8b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-30/', 'b56'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-10-31/', '3f1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-01/', 'f31'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-02/', 'd43'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-03/', '4f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-04/', '751'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-05/', '71e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-06/', 'ad7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-07/', '977'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-08/', 'a68'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-09/', 'b1d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-10/', '994'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-11/', '8d3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-12/', 'c8f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-13/', '5e9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-14/', 'c27'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-15/', '631'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-16/', 'a7f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-17/', 'aa2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-18/', '70a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-19/', '9ae'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-20/', '8ac'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-21/', '4ae'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-22/', 'd29'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-23/', '9a3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-24/', '1dc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-25/', '6de'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/ideas-feedback-rants/chat_2024-11-26/', '75e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-26/', '0b5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-27/', '162'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-28/', '201'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-29/', '543'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-30/', 'd38'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-10-31/', '0a7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-01/', '8c5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-02/', '89c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-03/', 'a7a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-04/', 'beb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-05/', '2b7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-06/', 'ea3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-07/', '716'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-08/', '4bc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-09/', '241'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-10/', '858'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-11/', '2d7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-12/', 'eac'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-13/', 'daa'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-14/', '884'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-15/', 'ce2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-16/', 'e22'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-17/', 'c27'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-18/', '0bb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-19/', '0a4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-20/', 'b81'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-21/', '698'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-22/', 'ab8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-23/', '654'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-24/', 'dec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-25/', '8f6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/memes-and-marketing/chat_2024-11-26/', '0f4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-26/', '0a0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-27/', 'cca'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-28/', 'a0e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-29/', '83e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-30/', '4a5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-10-31/', 'a55'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-01/', '8f8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-02/', 'd28'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-03/', '076'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-04/', 'e4f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-05/', 'a1e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-06/', '425'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-07/', 'f54'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-08/', '458'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-09/', 'eb9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-10/', '68c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-11/', '5df'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-12/', '578'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-13/', 'f5e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-14/', '6c7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-15/', 'a14'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-16/', 'c0c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-17/', 'e5f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-18/', 'cc0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-19/', 'fc1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-20/', 'a0e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-21/', 'e15'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-22/', 'e2f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-23/', '84f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-24/', '875'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-25/', '744'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/price-talk-trenches/chat_2024-11-26/', 'ef6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-22/', '556'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-23/', '6b1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-24/', '46a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-25/', 'cb2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-26/', 'e07'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-27/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-27/', '651'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-28/', 'cb0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-29/', 'd91'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-30/', 'fbe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-10-31/', '715'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-01/', '795'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-02/', '910'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-03/', '050'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-04/', 'abb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-05/', '030'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-06/', '2c3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-07/', 'b39'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-08/', '7ea'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-09/', '2f8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-10/', '5dc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-11/', '3bf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-12/', '866'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-13/', '96d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-14/', 'ade'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-15/', '642'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-16/', '5e1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-17/', '595'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-18/', '7a2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-19/', 'ecf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-20/', '9ab'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-21/', 'c8d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-22/', 'f5e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-23/', '2d8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-24/', '459'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-25/', '692'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/the-arena/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/the-arena/chat_2024-11-26/', 'db0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-10-28/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-10-28/', '8a8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-10-29/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-10-29/', 'd34'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-10-30/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-10-30/', '89f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-10-31/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-10-31/', '64a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-01/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-01/', '2c7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-02/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-02/', 'bc1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-03/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-03/', 'd2e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-04/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-04/', 'aee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-05/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-05/', 'abe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-06/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-06/', '0c8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-07/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-07/', 'e75'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-08/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-08/', '2bb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-09/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-09/', 'db8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-10/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-10/', '8ee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-11/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-11/', '93b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-12/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-12/', '7f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-13/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-13/', '8f5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-14/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-14/', '2fe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-15/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-15/', 'ae8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-16/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-16/', 'a24'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-17/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-17/', '63a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-18/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-18/', '88e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-19/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-19/', '30e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-20/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-20/', '163'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-21/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-21/', '014'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-22/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-22/', 'd4a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-23/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-23/', '6c7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-24/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-24/', '20e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-25/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-25/', '278'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Discord/the_arena/twitter/chat_2024-11-26/',
                component: ComponentCreator('/eliza/community/Discord/the_arena/twitter/chat_2024-11-26/', '142'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/profiles/',
                component: ComponentCreator('/eliza/community/profiles/', 'b1c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/10-2024/2024-10-25/',
                component: ComponentCreator('/eliza/community/Streams/10-2024/2024-10-25/', '254'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/10-2024/2024-10-27/',
                component: ComponentCreator('/eliza/community/Streams/10-2024/2024-10-27/', 'fee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/10-2024/2024-10-29/',
                component: ComponentCreator('/eliza/community/Streams/10-2024/2024-10-29/', 'ec4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-06/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-06/', 'd38'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-08/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-08/', '72c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-10/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-10/', '3a5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-15/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-15/', 'fd8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-21/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-21/', 'c6d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-22/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-22/', '40d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-24/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-24/', '558'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-26/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-26/', '8f9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-28/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-28/', 'ff5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/eliza/community/Streams/11-2024/2024-11-29/',
                component: ComponentCreator('/eliza/community/Streams/11-2024/2024-11-29/', '3e2'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/eliza/docs/',
    component: ComponentCreator('/eliza/docs/', 'f8e'),
    routes: [
      {
        path: '/eliza/docs/',
        component: ComponentCreator('/eliza/docs/', '0bf'),
        routes: [
          {
            path: '/eliza/docs/',
            component: ComponentCreator('/eliza/docs/', '91c'),
            routes: [
              {
                path: '/eliza/docs/advanced/autonomous-trading/',
                component: ComponentCreator('/eliza/docs/advanced/autonomous-trading/', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/advanced/fine-tuning/',
                component: ComponentCreator('/eliza/docs/advanced/fine-tuning/', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/advanced/infrastructure/',
                component: ComponentCreator('/eliza/docs/advanced/infrastructure/', '52f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/advanced/trust-engine/',
                component: ComponentCreator('/eliza/docs/advanced/trust-engine/', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/api/',
                component: ComponentCreator('/eliza/docs/api/', '703'),
                exact: true
              },
              {
                path: '/eliza/docs/api/classes/AgentRuntime/',
                component: ComponentCreator('/eliza/docs/api/classes/AgentRuntime/', 'e9f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/classes/DatabaseAdapter/',
                component: ComponentCreator('/eliza/docs/api/classes/DatabaseAdapter/', 'b5f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/classes/MemoryManager/',
                component: ComponentCreator('/eliza/docs/api/classes/MemoryManager/', 'cf5'),
                exact: true
              },
              {
                path: '/eliza/docs/api/classes/Service/',
                component: ComponentCreator('/eliza/docs/api/classes/Service/', '5ee'),
                exact: true
              },
              {
                path: '/eliza/docs/api/enumerations/Clients/',
                component: ComponentCreator('/eliza/docs/api/enumerations/Clients/', '79c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/enumerations/GoalStatus/',
                component: ComponentCreator('/eliza/docs/api/enumerations/GoalStatus/', '828'),
                exact: true
              },
              {
                path: '/eliza/docs/api/enumerations/ModelClass/',
                component: ComponentCreator('/eliza/docs/api/enumerations/ModelClass/', '55f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/enumerations/ModelProviderName/',
                component: ComponentCreator('/eliza/docs/api/enumerations/ModelProviderName/', 'c04'),
                exact: true
              },
              {
                path: '/eliza/docs/api/enumerations/ServiceType/',
                component: ComponentCreator('/eliza/docs/api/enumerations/ServiceType/', '1e7'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/addHeader/',
                component: ComponentCreator('/eliza/docs/api/functions/addHeader/', 'ff3'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/composeActionExamples/',
                component: ComponentCreator('/eliza/docs/api/functions/composeActionExamples/', 'cbd'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/composeContext/',
                component: ComponentCreator('/eliza/docs/api/functions/composeContext/', 'ce3'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/createGoal/',
                component: ComponentCreator('/eliza/docs/api/functions/createGoal/', 'caa'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/createRelationship/',
                component: ComponentCreator('/eliza/docs/api/functions/createRelationship/', '994'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/embed/',
                component: ComponentCreator('/eliza/docs/api/functions/embed/', '41b'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/findNearestEnvFile/',
                component: ComponentCreator('/eliza/docs/api/functions/findNearestEnvFile/', 'faf'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatActionNames/',
                component: ComponentCreator('/eliza/docs/api/functions/formatActionNames/', 'e73'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatActions/',
                component: ComponentCreator('/eliza/docs/api/functions/formatActions/', 'eeb'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatActors/',
                component: ComponentCreator('/eliza/docs/api/functions/formatActors/', '796'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatEvaluatorExampleDescriptions/',
                component: ComponentCreator('/eliza/docs/api/functions/formatEvaluatorExampleDescriptions/', 'b36'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatEvaluatorExamples/',
                component: ComponentCreator('/eliza/docs/api/functions/formatEvaluatorExamples/', 'e3b'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatEvaluatorNames/',
                component: ComponentCreator('/eliza/docs/api/functions/formatEvaluatorNames/', '807'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatEvaluators/',
                component: ComponentCreator('/eliza/docs/api/functions/formatEvaluators/', '8a8'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatGoalsAsString/',
                component: ComponentCreator('/eliza/docs/api/functions/formatGoalsAsString/', '6f7'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatMessages/',
                component: ComponentCreator('/eliza/docs/api/functions/formatMessages/', 'd0f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatPosts/',
                component: ComponentCreator('/eliza/docs/api/functions/formatPosts/', '8b6'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatRelationships/',
                component: ComponentCreator('/eliza/docs/api/functions/formatRelationships/', '4c1'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/formatTimestamp/',
                component: ComponentCreator('/eliza/docs/api/functions/formatTimestamp/', 'f93'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateCaption/',
                component: ComponentCreator('/eliza/docs/api/functions/generateCaption/', '655'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateImage/',
                component: ComponentCreator('/eliza/docs/api/functions/generateImage/', '924'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateMessageResponse/',
                component: ComponentCreator('/eliza/docs/api/functions/generateMessageResponse/', 'db2'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateObject/',
                component: ComponentCreator('/eliza/docs/api/functions/generateObject/', '070'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateObjectArray/',
                component: ComponentCreator('/eliza/docs/api/functions/generateObjectArray/', 'a2f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateShouldRespond/',
                component: ComponentCreator('/eliza/docs/api/functions/generateShouldRespond/', 'b6c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateText/',
                component: ComponentCreator('/eliza/docs/api/functions/generateText/', 'fbb'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateTextArray/',
                component: ComponentCreator('/eliza/docs/api/functions/generateTextArray/', '053'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/generateTrueOrFalse/',
                component: ComponentCreator('/eliza/docs/api/functions/generateTrueOrFalse/', '506'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getActorDetails/',
                component: ComponentCreator('/eliza/docs/api/functions/getActorDetails/', '0d1'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getEndpoint/',
                component: ComponentCreator('/eliza/docs/api/functions/getEndpoint/', '11e'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getGoals/',
                component: ComponentCreator('/eliza/docs/api/functions/getGoals/', '53e'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getModel/',
                component: ComponentCreator('/eliza/docs/api/functions/getModel/', 'cb0'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getProviders/',
                component: ComponentCreator('/eliza/docs/api/functions/getProviders/', 'b0d'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getRelationship/',
                component: ComponentCreator('/eliza/docs/api/functions/getRelationship/', '12f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/getRelationships/',
                component: ComponentCreator('/eliza/docs/api/functions/getRelationships/', 'bd6'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/loadEnvConfig/',
                component: ComponentCreator('/eliza/docs/api/functions/loadEnvConfig/', '923'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/retrieveCachedEmbedding/',
                component: ComponentCreator('/eliza/docs/api/functions/retrieveCachedEmbedding/', '4be'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/splitChunks/',
                component: ComponentCreator('/eliza/docs/api/functions/splitChunks/', 'a01'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/trimTokens/',
                component: ComponentCreator('/eliza/docs/api/functions/trimTokens/', '86a'),
                exact: true
              },
              {
                path: '/eliza/docs/api/functions/updateGoal/',
                component: ComponentCreator('/eliza/docs/api/functions/updateGoal/', '39e'),
                exact: true
              },
              {
                path: '/eliza/docs/api/globals/',
                component: ComponentCreator('/eliza/docs/api/globals/', '3d7'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Account/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Account/', 'a98'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Action/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Action/', '21e'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/ActionExample/',
                component: ComponentCreator('/eliza/docs/api/interfaces/ActionExample/', '65b'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Actor/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Actor/', '69b'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Content/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Content/', '6c1'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/ConversationExample/',
                component: ComponentCreator('/eliza/docs/api/interfaces/ConversationExample/', '976'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/EvaluationExample/',
                component: ComponentCreator('/eliza/docs/api/interfaces/EvaluationExample/', '00f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Evaluator/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Evaluator/', 'cdb'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Goal/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Goal/', 'd1d'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IAgentRuntime/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IAgentRuntime/', 'd88'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IBrowserService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IBrowserService/', 'c36'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IDatabaseAdapter/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IDatabaseAdapter/', 'a16'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IImageDescriptionService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IImageDescriptionService/', '446'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IMemoryManager/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IMemoryManager/', 'cd5'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IPdfService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IPdfService/', 'd2a'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/ISpeechService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/ISpeechService/', '890'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/ITextGenerationService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/ITextGenerationService/', 'a49'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/ITranscriptionService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/ITranscriptionService/', '7be'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/IVideoService/',
                component: ComponentCreator('/eliza/docs/api/interfaces/IVideoService/', 'f13'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Memory/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Memory/', '862'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/MessageExample/',
                component: ComponentCreator('/eliza/docs/api/interfaces/MessageExample/', '8b2'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Objective/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Objective/', '63b'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Participant/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Participant/', 'ca0'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Provider/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Provider/', 'd0c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Relationship/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Relationship/', '10d'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/Room/',
                component: ComponentCreator('/eliza/docs/api/interfaces/Room/', 'c4c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/interfaces/State/',
                component: ComponentCreator('/eliza/docs/api/interfaces/State/', 'fb7'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Character/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Character/', 'ff1'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Client/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Client/', '85e'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Handler/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Handler/', 'd7a'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/HandlerCallback/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/HandlerCallback/', 'dae'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Media/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Media/', 'bf3'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Model/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Model/', 'd6c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Models/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Models/', '224'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Plugin/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Plugin/', 'f0c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/UUID/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/UUID/', '56c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/type-aliases/Validator/',
                component: ComponentCreator('/eliza/docs/api/type-aliases/Validator/', 'd07'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/defaultCharacter/',
                component: ComponentCreator('/eliza/docs/api/variables/defaultCharacter/', '06c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/elizaLogger/',
                component: ComponentCreator('/eliza/docs/api/variables/elizaLogger/', 'd8c'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/embeddingDimension/',
                component: ComponentCreator('/eliza/docs/api/variables/embeddingDimension/', 'f33'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/embeddingZeroVector/',
                component: ComponentCreator('/eliza/docs/api/variables/embeddingZeroVector/', '63f'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/evaluationTemplate/',
                component: ComponentCreator('/eliza/docs/api/variables/evaluationTemplate/', '742'),
                exact: true
              },
              {
                path: '/eliza/docs/api/variables/settings/',
                component: ComponentCreator('/eliza/docs/api/variables/settings/', 'fd6'),
                exact: true
              },
              {
                path: '/eliza/docs/core/actions/',
                component: ComponentCreator('/eliza/docs/core/actions/', '682'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/core/agents/',
                component: ComponentCreator('/eliza/docs/core/agents/', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/core/characterfile/',
                component: ComponentCreator('/eliza/docs/core/characterfile/', 'a32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/core/evaluators/',
                component: ComponentCreator('/eliza/docs/core/evaluators/', '5f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/core/providers/',
                component: ComponentCreator('/eliza/docs/core/providers/', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/faq/',
                component: ComponentCreator('/eliza/docs/faq/', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/guides/advanced/',
                component: ComponentCreator('/eliza/docs/guides/advanced/', 'd39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/guides/configuration/',
                component: ComponentCreator('/eliza/docs/guides/configuration/', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/guides/docker-setup/',
                component: ComponentCreator('/eliza/docs/guides/docker-setup/', 'f2a'),
                exact: true
              },
              {
                path: '/eliza/docs/guides/local-development/',
                component: ComponentCreator('/eliza/docs/guides/local-development/', 'd71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/guides/secrets-management/',
                component: ComponentCreator('/eliza/docs/guides/secrets-management/', 'b91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/guides/template-configuration/',
                component: ComponentCreator('/eliza/docs/guides/template-configuration/', '647'),
                exact: true
              },
              {
                path: '/eliza/docs/intro/',
                component: ComponentCreator('/eliza/docs/intro/', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/',
                component: ComponentCreator('/eliza/docs/packages/', '07a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/adapters/',
                component: ComponentCreator('/eliza/docs/packages/adapters/', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/agent/',
                component: ComponentCreator('/eliza/docs/packages/agent/', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/agents/',
                component: ComponentCreator('/eliza/docs/packages/agents/', 'a4a'),
                exact: true
              },
              {
                path: '/eliza/docs/packages/clients/',
                component: ComponentCreator('/eliza/docs/packages/clients/', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/core/',
                component: ComponentCreator('/eliza/docs/packages/core/', '98c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/packages/database-adapters/',
                component: ComponentCreator('/eliza/docs/packages/database-adapters/', 'b4c'),
                exact: true
              },
              {
                path: '/eliza/docs/packages/plugins/',
                component: ComponentCreator('/eliza/docs/packages/plugins/', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/eliza/docs/quickstart/',
                component: ComponentCreator('/eliza/docs/quickstart/', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/eliza/',
    component: ComponentCreator('/eliza/', '769'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
